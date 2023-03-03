class Item < ApplicationRecord
    validates :category_id, presence:true
    belongs_to :category
    belongs_to :user, optional: true
end
