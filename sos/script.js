document.getElementById('sosButton').addEventListener('click',function() {
    const message = document.getElementById('message');
    message.textContent = "Sending your location and calling the helpline .."
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const loctationMessage = `Emergency I need help. My location is : http://www.google.com?q=${latitude},${longitude}`;
        const helpnum = `9336320015`;
        window.location.href = `tel:${helpnum}`;
        console.log(locationMessage);
    },function(){
        message.textContent = "Unable to retreive your location";

    });

}else { 
    message.textContent = "GeoLocation is unavailable at browser"
}
});