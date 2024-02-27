import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('Usuário não encontrado.');
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="profile-container">
      <h1>Perfil do GitHub</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Digite o nome de usuário do GitHub"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit">Buscar</button>
      </form>
      <div className="profile-info">
        {userData ? (
          <>
            <img
              className="avatar"
              src={userData.avatar_url}
              alt={`Avatar de ${userData.login}`}
            />
            <h2>{userData.name}</h2>
            <a href={`https://github.com/${userData.login}`} target="_blank" rel="noreferrer">
              <p>Nome de usuário: {userData.login}</p>
            </a>
            <p>Repositórios públicos: {userData.public_repos}</p>
            <p>Seguidores: {userData.followers}</p>
            <p>Seguindo: {userData.following}</p>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default App;