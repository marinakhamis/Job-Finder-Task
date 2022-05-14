import React from 'react'
import './map.css'
const Map = () => {
    return (
        <div className='map'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11879.701583814305!2d12.464892203181256!3d41.89446150808811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1652227922617!5m2!1sen!2seg"
                width="100%"
                title='map'
                height="100%"
                style={{ border: "none" }}
                loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    )
}

export default Map