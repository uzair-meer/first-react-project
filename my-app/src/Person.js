import styles from './person.module.css'
const Person = (props) =>{
    const {img, name, job} = props.data;

    return(<>
     <div className={styles.person}>
         <img src={img} alt="">
         </img>
     <div>
       <h4> 
           {name}
       </h4>
       <h4>
           {job}
       </h4>
       </div>
</div>
    </>)
}
export default Person