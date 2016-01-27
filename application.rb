require "rubygems"
require "bundler/setup"
require "sinatra"
require File.join(File.dirname(__FILE__), "environment")

configure do
  set :views, "#{File.dirname(__FILE__)}/views"
  set :show_exceptions, :after_handler
end

configure :production, :development do
  enable :logging
end

helpers do
  # add your helpers here
end

# root page
get "/" do
  erb :root
end

get "/about" do
  erb :about
end

get "/assignments/:number" do
  fileName = "assignment" + params[:number].to_s
  erb fileName.to_sym
end