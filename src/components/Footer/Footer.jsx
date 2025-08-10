import LanguageIcon from '@mui/icons-material/Language';

const FooterSection = () => {
    return(
        <>
            <footer className="bg-black text-white py-4 py-lg-5 mb-0">
                <div className="container">
                    <div className="d-md-flex justify-content-between align-items-center">
                        <div className="footer-logo d-flex gap-2">
                            <LanguageIcon className='fs-1'/>
                            <p className='fs-4'>L. O'Sullivan</p>
                        </div>
                        <div>
                            <p className=""> &copy; 2025 by 100Performance SEO. Powered and secured by <b className='name'>Chanchal Patil</b></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterSection;