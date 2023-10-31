import './Shop.sass';

export const Shop = () => {
    const items = [{value:"best seller", href: '/main' } , {value:"bags", href: '/bags'} ,{value:"cases", href: '/case' }]
    return (
        <div className='TT'>
            <nav>
                <div className='burger-btn'>
                    <span />
                </div>
            </nav>
            <main>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
            </main>
            <menushop header=  {"All products"} items={items} />
        </div>
    )
}