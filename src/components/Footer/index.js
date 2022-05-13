import React from 'react';
import {animateScroll as scroll } from 'react-scroll';
// If you ever link off of your own site you should use an A tag
// but since we have react router we used "to" instead
import {
    FaFacebook, 
    FaInstagram, 
    FaYoutube, 
    FaTwitter, 
    FaLinkedin} from 'react-icons/fa';
import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink, 
    SocialMedia, 
    SocialMediaWrap, 
    SocialLogo, 
    WebsiteRights, 
    SocialIcons, 
    SocialIconLink } from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
      };

    return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us </FooterLinkTitle>
                            <FooterLink to='/'>How it works</FooterLink>
                            <FooterLink to='/'>Testimonials</FooterLink>
                            <FooterLink to='/'>Careers</FooterLink>
                            <FooterLink to='/'>Investors</FooterLink>
                            <FooterLink to='/'>Terms of Service</FooterLink>  
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to='/'>Customer Support</FooterLink> 
                            <FooterLink to='/'>Email</FooterLink> 
                            <FooterLink to='/'>P.O Box</FooterLink> 
                            <FooterLink to='/'>Fax Machine</FooterLink>   
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Employees</FooterLinkTitle>
                            <FooterLink to='/'>Janitors</FooterLink> 
                            <FooterLink to='/'>Ambassadors</FooterLink> 
                            <FooterLink to='/'>Agency</FooterLink> 
                            <FooterLink to='/'>Influencer</FooterLink> 
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to='/'>Facebook</FooterLink>  
                            <FooterLink to='/'>Instagram</FooterLink>  
                            <FooterLink to='/'>Youtube</FooterLink>  
                            <FooterLink to='/'>Twitter</FooterLink>  
                            <FooterLink to='/'>LinkedIn</FooterLink>  
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        Turtle
                    </SocialLogo>
                    <WebsiteRights>Turtle © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink> 
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
    );
};

export default Footer;