const AddBtn = props => <button className="btn" onClick={props.add}>Dodaj</button>
const SubtractBtn = props => <button className="btn" onClick={props.subtract}>Odejmij</button>
 

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
          
          <h2> Licznik {this.state.counter} </h2>
          <div className="box-btn">
              <SubtractBtn subtract={this.SubtractNumber} />
              <AddBtn add={this.AddNumber}/>
          </div>
       </React.Fragment>
    )
  }
}

const Element = () => {
  return ( 
    <React.Fragment>
      <div className="box">
        <h1>1</h1>
        <div className="box-counter">
            <Counter />
        </div>
      </div>
      
      <div className="box">
        <h1>2</h1>
        <div className="box-counter">
            <Counter />
        </div>
      </div>
      
       <div className="box">
        <h1>3</h1>
        <div className="box-counter">
            <Counter />
        </div>
      </div>
      
      <div className="box">
        <h1>4</h1>
        <div className="box-counter">
            <Counter />
      </div>
      </div>
    </React.Fragment>
  )
}

ReactDOM.render(<Element />, document.getElementById('root'))