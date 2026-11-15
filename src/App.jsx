import './App.css'
import ChromaGrid from './component/ChromaGrid'

const items = [
  {
    image: '/photos/House.jpg',
    title: 'Home',
    subtitle: 'Sweet Home',
    accent: '#ffd23f'
  },
  {
    image: '/photos/Living room.jpg',
    title: 'Living room',
    subtitle: 'Family Time',
    accent: '#3fb8ff',
    
  },
  {
    image: '/photos/Gym.jpg',
    title: 'GYM',
    subtitle: 'Fitness',
    accent: '#73BDEB',
    
  },
  {
    image: '/photos/Kitchen.jpg',
    title: 'Kitchen',
    subtitle: 'Moms Food Yummy',
    accent: '#E6A6B9',
    
  },
  {
    image: '/photos/Swimming pool.jpg',
    title: 'Swimming Pool',
    subtitle: 'Relax',
    accent: '#8BC6A5',
    
  },
  {
    image: '/photos/Bedroom.jpg',
    title: 'Bedroom',
    subtitle: 'Sleepy',
    accent: '#3fb8ff',
    
  }
];

function App() {
  

  return (
    <>
<ChromaGrid items={items} columns={3} radius={260}
    reveal="spotlight"
    
    minCardWidth={180}
    gap={12}
    
    aspectRatio="3 / 2"
    cardRadius={22}
    showInfo
    frame={false}
    softness={0.6}
    damping={0.45}
    fadeOut={0.6}
    grayscale={1}
    dim={0.12}
    glow={0.5}
    borderGlow={1}
/>
      
    </>
  )
}

export default App