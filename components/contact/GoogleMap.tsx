const GoogleMap = () => {
  return (
    <map>
      <iframe
      className="w-full"
      title="Mapa"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10738.240057441111!2d17.40525044606186!3d49.29313429495788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713073969cb37f9%3A0x34b81dad4e7f5d40!2sPalivo%20Sedl%C3%A1%C4%8Dek%20s.r.o.!5e0!3m2!1scs!2scz!4v1710338609693!5m2!1scs!2scz"
      width="0"
      height="300"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </map>
  )
}

export default GoogleMap
