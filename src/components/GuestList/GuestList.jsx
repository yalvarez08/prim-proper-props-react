
function GuestList(props) {
 
    return (
    <div>
        <h2>Guest List</h2>
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Kid's Meal</th>
                    </tr>
                </thead>
                <tbody>
                    {props.guestList.map(guest => (
                        <tr key={guest.id}>
                            <td>{guest.name}</td>
                            <td>{String(guest.kidsMeal)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
    );
  }
  
  export default GuestList;
  