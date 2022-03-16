const PublicLayout = ({ children }: { children: any}) => {
    return (
        <>
            <div className="header">
                <a href="/">
                    <p> SPGI LOGO</p>
                </a>
                <nav></nav>
            </div>
            <main>{children}</main>
        </>
    )
}

export default PublicLayout