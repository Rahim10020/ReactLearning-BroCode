
function Bouton() {

    // On peut aussi utiliser :
    // Les modules -> pour des composants qui ne vont pas trop changer ( un module pour chaque composant, tous dans un seul dossier)
    // Un fichier externe pour les petits projets

    // Pour le style utilise ci dessous, c'est pour les petits composants ne necissitant pas beaucoup de style

    const styles = {
        backgroundColor: '#23272F',
        padding: '10px 20px',
        margin: '10px',
        color: '#58C4DC',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
    }
    return (
        <button style={styles}>Cliquez-moi</button>
    ) 
}

export default Bouton