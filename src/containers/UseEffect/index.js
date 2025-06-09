import { useEffect, useState } from "react";
import axios from "../../axios";


const UseEffect = () => {
    const [searchText, setSearchText] = useState (0);
    const [result, setResult] = useState({});
    const [list, setList] = useState(null);
    
    const onChange = (e) => {
        setSearchText(e.target.value);
    }
    const search = () => {
        let url = '/search.json?q='
        let text = searchText
        if(text.lenght > 0) {
            text.split(' ').join('+');
            url += text;

            axios.get(url).then(res=>{
                setResult(res.data);
            })
        }
        
    }

    useEffect(()=>{
    if (result && result.docs){
        let list = result.docs.map(item =>{ 
        return(
            <li key = {item.key}>
                <div>
                    <img src={`https://covers.openLibrary.org/b/id${item.cover_i}-M.jpg`}/>
                </div>
                <div>
                    <span>Author: {item.author_name}</span>
                    <br/>
                    <span>book title: {item.title}</span>
                </div>
            </li>
        )
        })
        setList(list)}
    },[result])

    
    // const getFacts = () => {
    //     let url = '/?lang=rus';
    //     if (counter > 0) {
    //         url += `&count=${counter}`
    //     }
    //     axios.get(url).then(res => {
    //         console.log(res.data.data)
    //         setFacts(res.data.data)
    // })
    // }


    // useEffect( () => {
    //     document.title=`clicked ${counter} time`
    // }, [counter]);

    // const renderFactList = (facts) => {
    //     return facts.map((fact, index) => {
    //                 return (
    //                     <li key={index}>{fact}</li>
    //                 )
    //             })
    // }

    return (
        <div>
            {/* <h1>UseEffect</h1>

            <h2>Counter: {counter}</h2>
            <button onClick={()=>setCounter(counter + 1)}>dfdfdf</button>
            <button onClick={getFacts}>get cat facts</button>
            {/* <button onClick={}>facts</button> */}
            {/* {
                facts.lenght > 0 ? renderFactList(facts) : null
            } */} 

                <label>
                    search book 
                    <input onChange={onChange}/>
                    <button onClick={search}>search</button>
                </label>
                <ul>
                    {list}
                </ul>
        </div>
    )
}

export default UseEffect;