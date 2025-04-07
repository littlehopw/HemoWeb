import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../config/database.js';

const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret';


//função para cadastrar um novo usuário
export const cadastro = async (req, res) => {
    const { nome, senha, email, medula_ossea, tipo_sanguineo, data_nascimento, notificacoes } = req.body;

    try {
        // verifica se já existe um usuário com o e-mail informado
        const emailCheck = await pool.query('SELECT 1 FROM usuario WHERE email = $1', [email]);

        if (emailCheck.rowCount > 0) {
            return res.status(409).json({ error: 'E-mail já está em uso.' }); // 409 = Conflict
        }

        const hashedPassword = await bcrypt.hash(senha, saltRounds);

        const result = await pool.query(
            `INSERT INTO usuario (nome, senha, email, medula_ossea, tipo_sanguineo, data_nascimento, notificacoes, data_criacao, data_modificacao) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) RETURNING *`,
            [nome, hashedPassword, email, medula_ossea, tipo_sanguineo, data_nascimento, notificacoes]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//função para autenticar o usuário
export const login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const result = await pool.query('SELECT * FROM usuario WHERE email = $1', [email]);
        const user = result.rows[0];

        if (!user) {
            return res.status(401).json({ error: 'Email invalido ou senha' });
        }

        const isMatch = await bcrypt.compare(senha, user.senha);

        if (!isMatch) {
            return res.status(401).json({ error: 'Email invalido ou senha' });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, jwtSecret, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};