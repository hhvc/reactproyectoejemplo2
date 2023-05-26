import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import RickAndMortyService from '../../services/RickAndMorty.service';

export const Detail = () => {

    const [mascota, setMascota] = useState({});
    const { id } = useParams();
    const { pathname } = useLocation();

    useEffect(() => {
        RickAndMortyService.getCharacterById(id)
            .then((data) => setMascota(data))
    }, [])

    return (
        <div className='row m-3'>
            <div className='col-md-12'>
                <div className='card flex-md-row mb-4 box-shadow h-md-250'>
                    <div className='card-body d-flex flex-column align-items-start'>
                        <strong className='d-inline-block mb-2 text-success'>
                            {mascota.species}
                        </strong>
                        <h3 className='mb-0 text-dark'>{mascota.name}</h3>
                        <div className='mb-1 text-muted'>
                            {new Date(mascota.created).toLocaleDateString()}
                        </div>
                        <div className='mb-1 text-muted'></div>
                        <p className='card-text mb-auto'>
                            Acá sale un texto que luego reemplazaré con algún xxx
                        </p>
                        <ul className='list-group mt-1'>
                            <li className='list-group-item'>Cras justo odio</li>
                            <li className='list-group-item'>Dapidus ac facilisis in</li>
                            <li className='list-group-item'>Morbi leo risus</li>
                            <li className='list-group-item'>Porta ac consecutetur ac</li>
                            <li className='list-group-item'>Vestibulum at eros</li>
                        </ul>

                        <Link to={"/"} className='mt-3 btn btn-primary btn-lg'>
                            Volver
                        </Link>
                    </div>

                    <img
                        className='h=100 d-inline-block rounded card-img-right flex-auto d-none d-md-block m-4'
                        height="auto"
                        src={mascota.image}
                        alt="Imagen tarjeta"
                    />
                </div>
            </div>
        </div>
    )
}

