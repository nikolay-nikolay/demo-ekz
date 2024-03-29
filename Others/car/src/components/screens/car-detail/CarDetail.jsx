import { useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import withAuth from '../../../HOC/withAuth'
import { CarService } from '../../../services/car.service'
import CarItem from '../home/car-item/CarItem'
const CarDetail = () => {
	const { id } = useParams()
	const [car, setCar] = useState({})

	useEffect(() => {
		if (!id) return
		const fetchData = async () => {
			const data = await CarService.getById(id)
			setCar(data)
		}
		fetchData()
	}, [id])

	if (!car?.name) return <p>Loading...</p>
	return (
		<div>
			<Link to='/'>Back</Link>
			<CarItem car={car} />
		</div>
	)
}

export default withAuth(CarDetail) 
