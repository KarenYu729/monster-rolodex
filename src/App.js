import {Component} from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box-component";

import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: '',
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((user) =>
                this.setState(
                    () => {
                        return {monsters: user};
                    }
                ));
    }

    onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase();
        this.setState(
            () => {
                return {searchField};
            }
        );

    };

    render() {
        const {monsters, searchField} = this.state;
        const {onSearchChange} = this;

        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });

        return (
            <div className="App">

                <h1 className={"app-title"}>Monsters Rolodex</h1>

                <SearchBox onChangeHandler={onSearchChange}
                           placeholder={'search monsters'}
                           className={'monsters-search-box'}/>
                {/*<input*/}
                {/*    className='search-box'*/}
                {/*    type='search'*/}
                {/*    placeholder='search monsters'*/}
                {/*    onChange={onSearchChange}*/}
                {/*/>*/}

                <CardList monsters={filteredMonsters}/>

                {/*{*/}
                {/*    filteredMonsters.map((monster) => {*/}
                {/*        return (*/}
                {/*            <div key={monster.id}>*/}
                {/*                <h1>{monster.name}</h1>*/}
                {/*            </div>*/}
                {/*        );*/}
                {/*    })*/}
                {/*}*/}
            </div>
        );
    }


}

export default App;
