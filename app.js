
const data = {
  users: [
    {
      id:1,
      age: 29,
      name: 'Arek',
      sex: "male"
    },
     {
      id:2,
      age: 49,
      name: 'Marta',
      sex: "female"
    },
     {
      id:3,
      age: 19,
      name: 'Stasia',
      sex: "female"
    },
     {
      id:4,
      age: 29,
      name: 'Karol',
      sex: "male"
    }
  ]
}
const Item = ({ user }) => (
  <div className="userInfo">
    <h1>{user.name}</h1>
    <p>Informacje o użytkowniku</p>
    <p> Wiek użytkownika: <strong>{user.age}</strong></p>
    <p>Płeć użytkownika: <strong>{user.sex}</strong></p>
  </div>
)

class ListItems extends React.Component {

   render() {
     let users = this.props.data.users
     users = users.filter((user) => user.sex === "male")
     const Items = users.map(user => <Item key={user.id} user={user}/>)
     return(
      <React.Fragment>
         <ul>
          {Items}
         </ul>
      </React.Fragment>
     )
   } 
 }
 
 ReactDOM.render(<ListItems data={data}/>, document.getElementById('root'));