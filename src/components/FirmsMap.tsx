import hallFilled from '../assets/img/png/hall_filled.png';
import aulaFilled from '../assets/img/png/aula_filled.png';
import aulaEmpty from '../assets/img/png/aula_empty.png';
import hallEmpty from '../assets/img/png/hall_empty.png';
import { useTranslation } from 'react-i18next';
import { IFirm } from '../models/IFirm';
import styled from 'styled-components';
import { useEffect } from 'react';

const FirmsMap = ({ selectedFirm, firms, clickFunction } : { selectedFirm: IFirm, firms: IFirm[], clickFunction: (f: IFirm) => void }) => {
    const { i18n } = useTranslation();

	useEffect(() => {
		preloadImages([ aulaEmpty, aulaFilled, hallEmpty, hallFilled ]);
    }, []);

    return (
		<MapContainer>
			<img 
				src=
				{
					firms.filter(function(firm) {
							return firm.gridMapColumn != null || firm.gridMapRow != null
						}).length === 0 
						? (i18n.language === 'et' ? aulaEmpty : hallEmpty)
						: (i18n.language === 'et' ? aulaFilled : hallFilled)
				} 
				alt="Aula"
			/>
			<div className='aspect-ratio-box'>
				<div className='container-map'>
					{
						firms.filter(function(firm) {
							return firm.gridMapColumn != null || firm.gridMapRow != null
						}).map((firm) => (
							<li 
								key={firm.name} 
								style={{gridColumn: firm.gridMapColumn, gridRow: firm.gridMapRow}}
							>
								<button 
									className={selectedFirm != undefined && selectedFirm.name === firm.name ? 'active' : ''}
									onClick={() => clickFunction(firm)}
								>
									{firm.shortName}
								</button>
							</li>
						))
					}
				</div>
			</div>
		</MapContainer>
    )
};

export default FirmsMap;

const images = []
const preloadImages = async (sources: string[]) => {
	const promises = sources.map(i => preloadImage(i))
	await Promise.all(promises)
}

function preloadImage(src: string) {
	images.push(new Image().src = src);
}

const MapContainer = styled.div`
    top: 30%;
    position: sticky;

    img {
        position: absolute;
        width: 100%;
        height: auto;
    }

    .aspect-ratio-box {
        height: 0;
        overflow: hidden;
        padding-top: calc(68/81*100%);
        position: relative;
    }

    .container-map {
        list-style-type: none;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        display: grid;
        grid-template-columns: 17% 12% 12% 12% 12% 12% 12% 7% 4%;
        grid-template-rows: 4fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 2fr;
    }

    .container-map li {
        padding: 1px;
        display: flex;
        flex: 1;
    }

    .container-map button {
        padding: 0 2px;
        cursor: pointer;
        font-weight: 600;
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        border: 2px solid #FF0063;
        color: white;
        font-size: 0.7vw;
        border-radius: 4px;
        background-color: #FF0063;
        overflow: hidden;
    }

    .container-map button:hover {
        background-color: white;
        color: #FF0063;
        transition: 0.2s;
    }

    .container-map .active {
        background-color: white;
        color: #FF0063;
        transition: 0.2s;
    }

    .container-map h2:not(#sideways) {
        text-align: center;
        color: white;
    }

    @media all and (max-width: 700px) {
        .container-map button {
            font-size: 2vw;
            font-weight: 600;
        }
        
        .container-map button {
            border: 1px solid #FF0063;
        }
    }
`