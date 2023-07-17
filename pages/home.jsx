const { Outlet, Link } = ReactRouterDOM
const { useEffect, useState } = React

import { frontEndService } from "../services/front-end-service.js"
import { Filter } from "../cmps/filter.jsx";
const { useParams, useNavigate } = ReactRouterDOM
export function Home() {

    const [currentCity, setCurrentCity] = useState({ city: '' })
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        // frontEndService.query()
        console.log(currentCity)
    }, [])

    useEffect(() => {
        // frontEndService.query()
        if (currentCity.city === '') return
        navigate(`/city/${currentCity}`)

    }, [currentCity])


    function onSubmit(ev) {
        ev.preventDefault()
        const value = ev.target[0].value
        setCurrentCity(value)
    }

    return (
        <section>
            <Link to="/city/Rehovot">Go-to-city-Rehovot</Link>

            <div className='containter-image-text'>
                <div className="inside-container-image-text">
                    <div className='information'>
                        <h1>מגיע לך להתפנק</h1>
                        <div className="address">כתובת למשלוח</div>
                        <Filter onSubmit={onSubmit} />
                        <h2>או לצפות במקומות הכי אהובים באיזור תל אביב</h2>
                    </div>
                    <div className='div-for-image-cover'>
                        <img className='image-cover' src='images/cover.jpg'></img>
                    </div>
                </div>
            </div>
            <div className="places-container">

                <div className="text-about-country">
                    <div>
                        <button>
                            כל המדינות
                        </button>
                        <button>
                            ישראל
                        </button>
                    </div>
                    <div>
                        המדינות שהפכו לטעימות בזכותנו
                    </div>
                </div>
                <div className="countries">
                    <div>
                        אזור נתניה
                    </div>
                    <div>
                        איזור יבנה
                    </div>
                    <div>
                        אשדוד
                    </div>
                    <div>
                        הרצליה - רמת השרון
                    </div>
                    <div>
                        ירושלים
                    </div>
                    <div>
                        ראשון, חולון, בת ים
                    </div>
                    <div>
                        ראשון, חולון, בת ים
                    </div>
                    <div>
                        ראשון, חולון, בת ים
                    </div>
                    <div>
                        ראשון, חולון, בת ים
                    </div>

                </div>
            </div>

            <div className="about-us-containter">
                <div className="info-about-us-containter">
                    <div className="about-us">
                        קצת עלינו
                    </div>
                    <div className="really-close-to-you">
                        ממש עד אליכם
                    </div>
                    <div className="text-about-us">
                        ‪Wolt‬ עוזר לך לגלות ולהזמין בקלות ממסעדות ובתי עסק. המשלוחים שלנו מגיעים במהירות עד לפתח הבית שלך!
                    </div>
                </div>
                <img className="image-people-are-eating" src="./images/people-are-eating.jpg" alt="" />
            </div>
            <div className="do-you-know-containter">
                <div>ידעת ש...
                </div>
                <div>
                    להזמין דרך Wolt הופך לא רק את החיים שלך לטובים יותר: ההזמנה עוזרת לאלפי בעלי עסקים ולשליחים מהסביבה להתפרנס ולהרוויח ממה שהם עושים :)
                </div>
            </div>
            <div className="not-cooking-tody-containter">
                <div>בייב, לא מבשלים היום!</div>
                <div>הורידו את אפליקציית Wolt ואנחנו נדאג שתמיד (אבל תמיד) תהיה לכם אפשרות להזמין מהמקומות הכי טובים! זה הזמן שלכם לגלות מה מגיע עד אליכם!</div>
            </div>
            <div className="hungry-for-other-things-containter">
                <div>רעבים לא רק לאוכל?</div>
                <div className="options-for-helping">
                    <div>בואו לעשות כסף טוב בצוות השליחים שלנו</div>
                    <div>הוסיפו משלוחי Wolt למסעדה שלכם</div>
                    <div>יש לנו משרות פנויות ומשרדים בת״א :)</div>
                </div>
            </div>
        </section >
    )
}
    // const imageCover = 'images/cover.jpg'
    // <a href="#" className='image-cover'
    // style={{
    //     backgroundImage: `url(${imageCover})`,
    //     display: 'block'
    // }}