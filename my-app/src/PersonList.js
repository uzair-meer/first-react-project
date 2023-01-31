import Person from "./Person";
const list = [
    {
    img: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
    name:'sam',
    job :'Engineer'
},
{
    img: "https://randomuser.me/api/portraits/thumb/men/70.jpg",
    name:'ali',
    job :'Doctor'
},
{
    img: "https://randomuser.me/api/portraits/thumb/men/79.jpg",
    name:'john',
    job :'Nurse'
}
]

const PeronList = () =>{

    return (<>
    {list.map((person) => <Person data={person} />)}
    </>)

}
export default PeronList;