class Category < ApplicationRecord
    validates :name, presence:true, uniqueness:true
    has_many :items
    has_many :users, through: :items
end
