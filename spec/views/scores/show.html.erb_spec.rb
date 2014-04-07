require 'spec_helper'

describe "scores/show" do
  before(:each) do
    @score = assign(:score, stub_model(Score,
      :game_id => 1,
      :user_id => 2,
      :record => 1.5
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/1/)
    rendered.should match(/2/)
    rendered.should match(/1.5/)
  end
end
