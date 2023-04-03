import './App.css';
import Video from './pages/Video';

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
        <Video 
          likes={352}
          messages={210}
          shares={54}
          name="Guilherme"
          description="Gatinho goleiro defendendo muito fofo *-*aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          music="Rap do Itachi - playertauz"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />
        <Video 
          likes={537}
          messages={236}
          shares={98}
          name="LockLock"
          description="Gatinho muito fofo *-*"
          music="Taka - Tribunal das Almas"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
      </div>
    </div>
  );
}

export default App;
