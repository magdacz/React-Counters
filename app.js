const ButtonAdd = (props) => {
  return (
    <button onClick={props.add}>Dodaj</button>
  )
}

const ButtonSubtract = (props) => {
  return (
    <button onClick={props.subtract}>Odejmij</button>
  )
}

class Counter extends React.Component {
  state = {
    counter: 0
  }

  AddNumber = () => {
    this.setState({
    counter: this.state.counter + 1
  })
  }
  
  SubtractNumber = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    return (
      <React.Fragment>
          <ButtonAdd add={this.AddNumber}/>
          <span> Licznik {this.state.counter} </span>
          <ButtonSubtract subtract={this.SubtractNumber} />
       </React.Fragment>
    )
  }
}

const Element = () => {
  return ( 
    <React.Fragment>
      <div> Counter 1 <br/>
        <Counter />
      </div>
      
      <div> Counter 2 <br/>
        <Counter />
      </div>
      
       <div> Counter 3 <br/>
        <Counter />
      </div>
      
      <div> Counter 3 <br/>
        <Counter />
      </div>
    </React.Fragment>
  )
}

ReactDOM.render(<Element />, document.getElementById('root'))