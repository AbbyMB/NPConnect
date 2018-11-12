require 'rails_helper'

RSpec.describe User, type: :model do
  describe "valid user" do
    user_new = User.new(email: "bob@bob.com", password: "888888", username: "bobG100", first_name: "Bob", last_name: "Green")
    no_email = User.new(password: "888888", username: "bobG100", first_name: "Bob", last_name: "Green")
    no_username = User.new(password: "888888", first_name: "Bob", last_name: "Green")
    no_password = User.new(email: "bob@bob.com", username: "bobG100", first_name: "Bob", last_name: "Green")
    no_first_name = User.new(email: "bob@bob.com", password: "888888", username: "bobG100", last_name: "Green")
    no_last_name = User.new(email: "bob@bob.com", password: "888888", username: "bobG100", last_name: "Green")

    it "Is valid with attributes" do
      expect(user_new).to be_valid
    end

    it "Is not valid without an email" do
      expect(no_email).to_not be_valid
    end

    it "Is not valid without a password" do
      expect(no_password).to_not be_valid
    end

    it "Is not valid without a username" do
      expect(no_username).to_not be_valid
    end

    it "Is valid without a first name" do
      expect(no_first_name).to be_valid
    end

    it "Is not valid without a last name" do
      expect(no_last_name).to be_valid
    end
  end
end
