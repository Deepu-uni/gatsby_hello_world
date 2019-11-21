import { navigate } from 'gatsby';

var host = window.location.host

export default (host) => {
  
  if(host.location.hostname == 'en.vethanda.com'){

    navigate('/en');
 }

 if(host.location.hostname == 'tn.vethanda.com')
 {
    navigate('/tn');
 }
  
  return null;
};

