import React from 'react'
import mecardStyles from './MeCard.module.scss'

// Card inspired by:	https://codepen.io/zebateira/pen/zrvwGR

const MeCard = () => {
	return (
		<>
			<div className={mecardStyles.card}>
				<div className={mecardStyles.content}>

					<svg className={mecardStyles.animation}>
						<path id="p" d="M0,200 Q80,100 400,200 V150 H0 V50" transform="translate(0 300)" />
						<rect id="dummyRect" x="0" y="0" height="450" width="400" fill="transparent" />
						<animate href="#p" attributeName="d" to="M0,50 Q80,100 400,50 V150 H0 V50" fill="freeze" begin="dummyRect.mouseover" end="dummyRect.mouseout" dur="0.1s" id="bounce1" />
						<animate href="#p" attributeName="d" to="M0,50 Q80,0 400,50 V150 H0 V50" fill="freeze" begin="bounce1.end" end="dummyRect.mouseout" dur="0.15s" id="bounce2" />
						<animate href="#p" attributeName="d" to="M0,50 Q80,80 400,50 V150 H0 V50" fill="freeze" begin="bounce2.end" end="dummyRect.mouseout" dur="0.15s" id="bounce3" />
						<animate href="#p" attributeName="d" to="M0,50 Q80,45 400,50 V150 H0 V50" fill="freeze" begin="bounce3.end" end="dummyRect.mouseout" dur="0.1s" id="bounce4" />
						<animate href="#p" attributeName="d" to="M0,50 Q80,50 400,50 V150 H0 V50" fill="freeze" begin="bounce4.end" end="dummyRect.mouseout" dur="0.05s" id="bounce5" />
						<animate href="#p" attributeName="d" to="M0,200 Q80,100 400,200 V150 H0 V50" fill="freeze" begin="dummyRect.mouseout" dur="0.15s" id="bounceOut" />
					</svg>

					<div className={mecardStyles.info}>
						<div className={mecardStyles.name}>David M. Fajardo</div>
						<div className={mecardStyles.job}>Frontend Developer</div>
					</div>
				</div>
				<div className={mecardStyles.overlay}></div>
			</div>
		</>
	)
}

export default MeCard
