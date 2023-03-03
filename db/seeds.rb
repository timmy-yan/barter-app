require 'faker'



# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
5.times do |n|
    username = Faker::Name.first_name
    password = Faker::Internet.password(min_length: 4, max_length: 6, mix_case: false)
    User.create!(username: username, password: password)
end

Category.create(name: "HouseHold", image_url: "https://static.thenounproject.com/png/2663849-200.png")
Category.create(name: "Tools/Outdoor Items", image_url: "https://static.thenounproject.com/png/5129925-200.png")
Category.create(name: "Clothing", image_url: "https://static.thenounproject.com/png/4489023-200.png")
Category.create(name: "Games/Toys", image_url: "https://static.thenounproject.com/png/4504766-200.png")
Category.create(name: "Electronics", image_url: "https://static.thenounproject.com/png/2667326-200.png")
Category.create(name: "Vehicles/Parts", image_url: "https://static.thenounproject.com/png/4613445-200.png" )

Item.create(
    
        name: "Chef's Knives",
        image_url: "https://images.craigslist.org/00G0G_iJPTFRDXgiaz_0CI0t2_600x450.jpg",
        category_id: 1,
        
      
)
    