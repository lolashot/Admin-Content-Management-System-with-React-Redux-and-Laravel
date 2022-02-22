
function TopCard({color,total,icon,events}) {
    return (

<div className="info-stats2">
								<div className={color}>
									<i className={icon}></i>
								</div>
								<div className="sale-num">
									<h3>{events}</h3>
									<p>{total}</p>
								</div>
							</div>
 )
 }
 export default TopCard