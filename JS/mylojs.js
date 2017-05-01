
function getValue()
{
    var retVal = prompt("Enter your name : ", "your name here");
    document.write("You have entered : " + retVal);
}

<script type="text/javascript">
    $(document).ready(function(){
        if ($(window).width() > 700) {
            $.stratus({
                links: 'http://soundcloud.com/mylo651'
            });
        }
        else {
            $('.small-player').append('')
        }
        
    });
</script>