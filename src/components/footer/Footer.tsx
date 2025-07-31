import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react'
import { type ReactNode, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

export function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode

    if (usuario.token !== "") {

        component = (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        <strong>Diário de uma mãe em dobro</strong> © {data}</p>
                    <p className='text-lg'>Feito com 💗 por Adrielli Bertoldo</p>
                    <p className='text-lg'>Acesse nossas redes sociais:</p>
                    <div className='flex gap-2'>
	<a href="https://www.linkedin.com/in/adrielli-bertoldo/" target="_blank">
    	<LinkedinLogoIcon size={48} weight='bold' />
    </a>
    <a href="https://www.instagram.com/adrielli.bertoldo" target="_blank">
    	<InstagramLogoIcon size={48} weight='bold' />
    </a>
    <a href="https://www.facebook.com/adrielli.bertoldo" target="_blank">
    	<FacebookLogoIcon size={48} weight='bold' />
	</a>
</div>
                </div>
            </div>
        </>
    )
}

return component
}

export default Footer