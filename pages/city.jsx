import { List } from "../cmps/list.jsx"
import { frontEndService } from "../services/front-end-service.js"

const { useState, useEffect } = React
const { Link, useParams } = ReactRouterDOM

export function City() {

    const [currentData, setCurrentData] = useState(null)
    const params = useParams()

    useEffect(() => {
        console.log(params)
        loadData()
    }, [])

    function loadData() {
        frontEndService.query(params.city)
            .then((data) => {
                console.log(data)
                setCurrentData(data)
            })
    }

    return (<section>
        <Link to="/">link-back</Link>
        <div className="options-for-select">
            <div>המלצות</div>
            <div>מסעדות</div>
            <div>חנויות</div>
        </div>
        <div className="containter-total-data">
            {currentData !== null && <List data={currentData} />}
        </div>
    </section>)
}