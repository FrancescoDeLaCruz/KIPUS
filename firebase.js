// Configuración simulada / lista para credenciales de Firebase SDK
export const firebaseConfig = {
    apiKey: "AIzaSyDummyKeyForGitHubPagesDeployment",
    authDomain: "kipus-chezcofinance.firebaseapp.com",
    projectId: "kipus-chezcofinance",
    storageBucket: "kipus-chezcofinance.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdef"
};

// Simulador de Autenticación Avanzada OAuth para producción estática
export function initAuth(onLoginSuccess) {
    const authOverlay = document.getElementById('auth-overlay');
    const appContainer = document.getElementById('app-container');
    const userNameEl = document.getElementById('user-name');
    const userAvatarEl = document.getElementById('user-avatar');
    const btnLogout = document.getElementById('btn-logout');

    const handleLogin = (name, avatar) => {
        userNameEl.textContent = name;
        userAvatarEl.src = avatar;
        authOverlay.classList.add('hidden');
        appContainer.classList.remove('hidden');
        onLoginSuccess();
    };

    document.getElementById('btn-google-login').addEventListener('click', () => {
        handleLogin("Francesco Martin (Google)", "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150");
    });

    document.getElementById('btn-outlook-login').addEventListener('click', () => {
        handleLogin("Chezco (Outlook)", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150");
    });

    document.getElementById('btn-guest-login').addEventListener('click', () => {
        handleLogin("Modo Invitado", "https://via.placeholder.com/150");
    });

    btnLogout.addEventListener('click', () => {
        appContainer.classList.add('hidden');
        authOverlay.classList.remove('hidden');
    });
}
