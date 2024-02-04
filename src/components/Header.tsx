import BG from '../assets/img/png/PK2023_0.jpg'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const Header = () => {
    const { t } = useTranslation();

    return (
        <HeaderContainer>
            <div className='header-bg'>
                <div id='img-filter'></div>
                <img src={BG} alt="Event" />
            </div>
            <header>
                <h1 id='header-title'>PRAKTIKA-<br/>KOHVIK</h1>
                <h3 id='header-date'>{t('header.date')}</h3>
                
                <section className='countdown'>
                    <div className='container-day'>
                        <h1 className='dayNr'>0</h1>
                        <h3>{t('countDown.day')}</h3>
                    </div>
                    <div className='container-hour'>
                        <h1 className='hourNr'>0</h1>
                        <h3>{t('countDown.hour')}</h3>
                    </div>
                    <div className='container-minute'>
                        <h1 className='minuteNr'>0</h1>
                        <h3>{t('countDown.minute')}</h3>
                    </div>
                    <div className="container-second">
                        <h1 className="secondNr">0</h1>
                        <h3>{t('countDown.second')}</h3>
                    </div>
                </section>
            </header>
        </HeaderContainer>
    )
};

export default Header;

const HeaderContainer = styled.div`
    .header-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 80vh;
        max-height: 800px;
        overflow: hidden;
        object-fit: cover;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .header-bg img {
        position: absolute;
        min-width: 100%;
        min-height: 100%;
    }
    #img-filter {
        height: 100%;
        width: 100%;
        z-index: 1;
        background: rgb(27,11,100);
        background: linear-gradient(0deg, rgba(27,11,100,1) 3%, rgba(27,11,100,0.7682423311121324) 100%);
    }

    header {
        position: relative;
        z-index: 5;
        height: 80vh;
        max-height: 800px;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    #header-title {
        letter-spacing: 8px;
    }

    #header-date {
        margin: 15px 0;
        padding-left: 5px;
        font-size: 25px;
    }

    .countdown {
        display: flex;
        text-align: center;
        padding-left: 5px;
    }

    .countdown div {
        border: 1px solid #ffffff48;
        background-color: rgba(255, 255, 255, 0.1);
        border-bottom: 4px solid #FFFFFF;
        margin-right: 10px;
        width: 110px;
        height: 105px;
    }

    .countdown div h3 {
        font-size: 13px;
    }

    .countdown div h1 {
        padding-top: 25px;
        font-size: 45px;
        letter-spacing: normal;
    }

    .countdown .dayNr {
        color: #FF0063;
    }

    .countdown .container-day {
        border-bottom-color: #FF0063;
    }

    .countdown .hourNr{
        color: #fc3b85;
    }

    .countdown .container-hour {
        border-bottom-color: #fc3b85;
    }

    .countdown .minuteNr{
        color: #ff97bf;
    }

    .countdown .container-minute {
        border-bottom-color: #ff97bf;
    }

    @media all and (max-width: 700px){
        #praktikakohvik_logo{
            width: 300px;
            height: auto;
            right: 15px;
            top: 35px;
        }

        #header-title {
            font-size: 45px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.521);
        }

        #header-date {
            font-size: 15px;
        }

        header, .header-bg {
            height: 300px;
        }

        .header-bg img {
            height: 100%;
        }

        .countdown div{
            width: 56px;
            height: 56px;
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.521);
        }

        .countdown div h1 {
            padding-top: 10px;
            font-size: 27px;
        }

        .countdown div h3 {
            font-size: 10px;
        }

        .header-bg {
            align-items: center;
            justify-content: center;
        }
    }
`