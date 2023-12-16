import Axios from 'axios'



function Catfact() {
    fetch("https://catfact.ninja/fact")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

  Axios.get("https://catfact.ninja/fact").then((res) => {
    console.log(res.data);
  });

  return (
    <>
      <button>Generate Cat Fact</button>
      <p></p>
    </>
  );
}

export default Catfact;
