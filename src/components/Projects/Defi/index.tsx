interface ProjectsProps {
    imagePath: string;
    name: string;
    text: string;
  }
  
  export const Projects: ProjectsProps[] = [
    {
      imagePath: "/images/ethereum.png",
      name: "Etheruem",
      text: " Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
    },
    {
      imagePath: "/images/aave.jpeg",
      name: "AAVE",
      text: " Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
    },
    {
      imagePath: "/images/base.png",
      name: "Base",
      text: " Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
    },
    {
      imagePath: "/images/farcaster.jpeg",
      name: "Farcaster",
      text: " Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
    },
  ];
  

const Defi: React.FC = () => {
    return (
        <div>How to Defi</div>
    )

}

export default Defi