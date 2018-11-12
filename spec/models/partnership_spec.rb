require 'rails_helper'

RSpec.describe Partnership, type: :model do
  describe "valid partnership" do
    let!(:user) { User.create(email: "bob@bob.com", password: "888888", username: "bobG100", first_name: "Bob", last_name: "Green") }
    let!(:program) { Program.create(name: "Project Help", description: "Provides help and support", category: "Child Welfare", owner_id: user.id, address: "330 Homer Street Newton, MA 02459") }

    it "Is valid with attributes" do
      partnership_new = Partnership.new(user_id: user.id, program_id: 1)
      expect(partnership_new).to be_valid
    end

    it "Is not valid without a user id" do
      no_user = Partnership.new(program_id: 1)
      expect(no_user).to_not be_valid
    end

    it "Is not valid without a program id" do
      no_program = Partnership.new(user_id: user.id)
      expect(no_program).to_not be_valid
    end
  end
end
