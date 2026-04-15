export async function getCigaretteById(id: string) {
    // We parse the string ID to an Integer just to be safe
    const numericId = parseInt(id, 10); 
    const result = await query('SELECT * FROM cigarettes WHERE id = $1', [numericId]);
    return result.rows[0]; 
}