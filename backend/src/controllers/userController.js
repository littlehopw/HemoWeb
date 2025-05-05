import pool from '../config/database.js';
import bcrypt from 'bcrypt';


export const getProfile = async (req, res) => {
    const userId = req.user.id;

    try {
        const result = await pool.query(
            'SELECT id, nome, email, tipo_sanguineo, medula_ossea, data_nascimento, notificacoes, data_criacao, data_modificacao FROM usuario WHERE id = $1',
            [userId]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const updateProfile = async (req, res) => {
    const userId = req.user.id;
    const {
        nome,
        email,
        senha,
        tipo_sanguineo,
        medula_ossea,
        data_nascimento,
        notificacoes
    } = req.body;

    try {
        const campos = [];
        const valores = [];
        let index = 1;

        if (nome !== undefined) {
            campos.push(`nome = $${index++}`);
            valores.push(nome);
        }

        if (email !== undefined) {
            campos.push(`email = $${index++}`);
            valores.push(email);
        }

        if (senha !== undefined) {
            const senhaHash = await bcrypt.hash(senha, 10);
            campos.push(`senha = $${index++}`);
            valores.push(senhaHash);
        }

        if (tipo_sanguineo !== undefined) {
            campos.push(`tipo_sanguineo = $${index++}`);
            valores.push(tipo_sanguineo);
        }

        if (medula_ossea !== undefined) {
            campos.push(`medula_ossea = $${index++}`);
            valores.push(medula_ossea);
        }

        if (data_nascimento !== undefined) {
            campos.push(`data_nascimento = $${index++}`);
            valores.push(data_nascimento);
        }

        if (notificacoes !== undefined) {
            campos.push(`notificacoes = $${index++}`);
            valores.push(notificacoes);
        }


        campos.push(`data_modificacao = CURRENT_TIMESTAMP`);

        const query = `UPDATE usuario SET ${campos.join(', ')} WHERE id = $${index} RETURNING id, nome, email, tipo_sanguineo, medula_ossea, data_nascimento, notificacoes, data_criacao, data_modificacao`;
        valores.push(userId);

        const result = await pool.query(query, valores);
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



export const deleteProfile = async (req, res) => {
    const userId = req.user.id;

    try {
        await pool.query('DELETE FROM usuario WHERE id = $1', [userId]);
        res.json({ message: 'Conta excluída com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
