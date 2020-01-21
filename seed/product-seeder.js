var Product= require('../models/product');
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true });
var products=[ 
            new Product({
                imagePath:'https://upload.wikimedia.org/wikipedia/en/c/c7/Kingdom_Hearts_HD_2.8_box_art.jpg',
                title:'Kingdom Hearts',
                description:'Amazing!!!!',
                price:50
            }),
            new Product({
                imagePath:'https://upload.wikimedia.org/wikipedia/en/c/cf/Pro_Evolution_Soccer_2019_Cover_Art.jpg',
                title:'PES 2019',
                description:'Amazing!!!!',
                price:50
            }),
            new Product({
                imagePath:'https://upload.wikimedia.org/wikipedia/en/7/71/FIFA_19_cover.jpg',
                title:'FIFA 2019',
                description:'Amazing!!!!',
                price:50}),
            new Product({
                imagePath:'https://upload.wikimedia.org/wikipedia/en/0/0c/Gowbox.jpg',
                title:'GOD OF WAR',
                description:'Amazing!!!!',
                price:50
            }),
            new Product({
                imagePath:'https://upload.wikimedia.org/wikipedia/en/a/ad/DBFZ_cover_art.jpg',
                title:'DRAGON BALL FIGHTER Z',
                description:'Amazing!!!!',
                price:50
            }),
            new Product({
                    imagePath:'https://upload.wikimedia.org/wikipedia/en/3/32/Crisis_Core.png',
                    title:'CRISIS CORE FINAL FANTASY',
                    description:'Amazing!!!!',
                    price:50
            }),
            new Product({
                    imagePath:'https://upload.wikimedia.org/wikipedia/en/c/cb/Devil_May_Cry_5.jpg',
                    title:'DEVIL MAY CRY 5',
                    description:'Amazing!!!!',
                    price:50
            }),
            new Product({
                    imagePath:'https://upload.wikimedia.org/wikipedia/en/8/86/Sands_of_time_cover.jpg',
                    title:'PRINCE OF PERSIA',
                    description:'Amazing!!!!',
                    price:50
            }),
            new Product({
                    imagePath:'https://upload.wikimedia.org/wikipedia/en/7/7b/Uncharted_2_box_artwork.jpg',
                    title:'UNCHARTED 2',
                    description:'Amazing!!!!',
                    price:50 
            })
          ];
var done=0;
for(var i=0;i<products.length;i++)
{
    products[i].save(function(err,result){
        done++;
        if(done===products.length)
        {
           exit(); 
        }
    });
}
function exit()
{
    mongoose.disconnect();
}