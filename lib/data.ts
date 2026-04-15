import { query } from './db';

export async function getCigaretteById(id: string) {
    try {
        const result = await query('SELECT * FROM cigarettes WHERE id = $1', [id]);
        return result.rows[0]; 
    } catch (err) {
        console.error("DB Fetch Error:", err);
        return null;
    }
}