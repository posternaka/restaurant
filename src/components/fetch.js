export const getFetch = () => 
    fetch('https://629e14403dda090f3c12ec2c.mockapi.io/v1/data').then(res => res.json()).then(data => data);