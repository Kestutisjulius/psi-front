function Nav() {
  return (
    <header className="nav">
      <img src={require('../img/PSI_Logo.png')} className="logo" alt="logo" />
      <ul className='nav-links'>
        <li>auction</li>
        <li>shop</li>
        <li>ads/advertisings</li>
        <li>snake</li>
        <li>jobs</li>
        <li className='dropdown'>account
          <div className='dropdown-content'>
            <p>sign up</p>
            <p>login</p>
            <p>log out</p>
          </div>
        </li>
        <li>en</li>
      </ul>
    </header>
  )
}

export default Nav;