require 'rubygems'
require 'bundler/setup'
require 'dotenv'
require 'ostruct'

require 'sinatra' unless defined?(Sinatra)

Dotenv.load

configure do
  SiteConfig = OpenStruct.new(
                 :title => 'Risk Legacy HCI Project Page',
                 :url_base => 'http://localhost:4567/'
               )

  # load models
  $LOAD_PATH.unshift("#{File.dirname(__FILE__)}/lib")
end
