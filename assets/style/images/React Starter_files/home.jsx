import { FavoriteListSongs } from "../cmps/FavoriteListSongs.jsx"
import { List } from "../cmps/list.jsx"
import { Search } from "../cmps/search.jsx"
import { frontEndService } from "../services/front-end-service.js"

const { Outlet, Link } = ReactRouterDOM
const { useEffect, useState } = React
const { useParams, useNavigate } = ReactRouterDOM

export function Home() {
    const [data, setData] = useState(null)
    const [searchToUpdate, setSearchToUpdate] = useState('')
    const [field, setField] = useState('')

    const [favoriteSongs, setFavoriteSongs] = useState([])


    useEffect(() => {
        frontEndService.query(searchToUpdate, field).then((item) => {
            setData(item)
        })
    }, [searchToUpdate, field])

    useEffect(() => {
        if (favoriteSongs.length <= 0) return
        console.log(favoriteSongs)
        // frontEndService.query(favoriteSongs).then((item) => {
        //     console.log(item)
        // })
        // frontEndService.query(id)
        console.log('favorite!')
    }, [favoriteSongs])


    function updateSearch(value) {
        setSearchToUpdate(value)
        setField('artist')
    }

    function updateFavSongs(id, operation) {
        setFavoriteSongs(prevArr => {
            if (operation === 'add') return [id, ...prevArr]
            else {
                return prevArr.filter(item => {
                    return item !== id
                })
            }
        })
    }

    return <section className="app">
        {!data && <div>"loading..." </div>}

        {data && <section className="home-page">
            <section className="left-nav">
                <div className="category">
                    <img src="../assets/style/images/home.svg" alt="SVG image" />
                    <div className="category-name">Home</div>
                </div>
                <div className="category">
                    <img src="../assets/style/images/search.svg" alt="SVG image" />
                    <div className="category-name">Search</div>
                </div>
                <div className="category">
                    <img src="../assets/style/images/library.svg" alt="SVG image" />
                    <div className="category-name">Your Library</div>
                </div>
                <div className="category">
                    <img src="../assets/style/images/full-heart.svg" alt="SVG image" />
                    <div className="category-name">Liked Songs</div>
                </div>
                {/* <div className="category">
                    <img src="../assets/style/images/full-heart.svg" alt="SVG image" />
                    <div className="category-name">Liked Songs</div>
                </div> */}
            </section>
            <section className="main-data">
                <Link to="/dashboard">Show dashboards</Link>
                <div>Focus</div>
                <Search updateSearch={updateSearch} />
                <List data={data} updateFavSongs={updateFavSongs} />
                {favoriteSongs.length > 0 && <FavoriteListSongs favoriteSongs={favoriteSongs} />}
            </section>
        </section>}
    </section>
}
