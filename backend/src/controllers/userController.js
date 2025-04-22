import pool from '../config/database.js';

// GET /profile - Ver perfil do usuário logado
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

// PUT /profile - Atualizar dados do perfil
export const updateProfile = async (req, res) => {
    const userId = req.user.id;
    const { nome, email, tipo_sanguineo, medula_ossea, data_nascimento, notificacoes } = req.body;

    try {
        const result = await pool.query(
            `UPDATE usuario SET 
                nome = $1, 
                email = $2,
                tipo_sanguineo = $3,
                medula_ossea = $4,
                data_nascimento = $5,
                notificacoes = $6,
                data_modificacao = CURRENT_TIMESTAMP
             WHERE id = $7 RETURNING *`,
            [nome, email, tipo_sanguineo, medula_ossea, data_nascimento, notificacoes, userId]
        );

        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE /profile - Excluir conta do usuário
export const deleteProfile = async (req, res) => {
    const userId = req.user.id;

    try {
        await pool.query('DELETE FROM usuario WHERE id = $1', [userId]);
        res.json({ message: 'Conta excluída com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
