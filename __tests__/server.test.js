describe('Server Tests', () => {
    it('should return a 200 status code', async () => {
        const response = await fetch('http://localhost:3001');
        expect(response.status).toBe(200);
    });
    
    it('should return the correct response body', async () => {
        const response = await fetch('http://localhost:3001');
        const data = await response.json();
        expect(data).toEqual({ message: 'Hello, World!' });
    });
});