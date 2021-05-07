function App() {

const name ='romo'
  const x = true
  const y = false
  return (
    <div className="container">
       <h1>Hello</h1>
       <h2>Welcome {name}</h2>
       <h3>hello {1+1}</h3>
       <h2> Hi {x ? name : 'not happening' }</h2>
      <h2> Hi {y ? name : 'not happening'}</h2>
       </div>
  );
}

export default App;
