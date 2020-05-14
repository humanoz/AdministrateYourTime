import { Input } from 'antd'


const SearchComponent = props => {
    return(
        <div>
            <Search onChange={props.handleChange} style={{height:'5vh', fontSize: '20px'}} placeholder='Filter...'/>
        </div>        
    )
};

export default SearchComponent;

const { Search } = Input;

