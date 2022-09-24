function run()
{
    console.log("run");
}

function jump()
{
    console.log("jump");
}


/*module.exports.jump=jump;
module.exports.run=run;*/

module.exports = {
    run : run,
    jump : jump
};