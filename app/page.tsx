import Image from 'next/image';

export default function Home() {
  return (
    <main style={{ textAlign: 'center', padding: '2rem' }}>
      <Image
        src="/CultivéNou.png" // Mets le bon nom exact de ton fichier logo
        alt="Logo Cultivé’Nou"
        width={200}
        height={200}
      />
      <h1>Bienvenue sur Cultivé’Nou 🌱</h1>
      <p>Un site d’abonnement et de suivi pour nos services locaux.</p>
    </main>
  );
}
